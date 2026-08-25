Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\USER-PC\Desktop\newline\public\newlinelogo.png"
$outPath = "c:\Users\USER-PC\Desktop\newline\src\app\favicon.ico"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$srcW = $src.Width
$srcH = $src.Height

$sizes = @(16, 32, 48, 64, 256)
$pngBlobs = @()

foreach ($size in $sizes) {
    $scale = [Math]::Min(($size * 0.92) / $srcW, ($size * 0.92) / $srcH)
    $newW = [int][Math]::Round($srcW * $scale)
    $newH = [int][Math]::Round($srcH * $scale)
    $offX = [int](($size - $newW) / 2)
    $offY = [int](($size - $newH) / 2)

    $canvas = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($canvas)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($src, $offX, $offY, $newW, $newH)
    $g.Dispose()

    $ms = New-Object System.IO.MemoryStream
    $canvas.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $pngBlobs += ,($ms.ToArray())
    $canvas.Save("c:\Users\USER-PC\Desktop\newline\scripts\favicon-preview-$size.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $canvas.Dispose()
}
$src.Dispose()

$fs = [System.IO.File]::Create($outPath)
$bw = New-Object System.IO.BinaryWriter($fs)

# ICONDIR
$bw.Write([UInt16]0)        # reserved
$bw.Write([UInt16]1)        # type = icon
$bw.Write([UInt16]$sizes.Count)

$headerSize = 6 + (16 * $sizes.Count)
$offset = $headerSize

for ($i = 0; $i -lt $sizes.Count; $i++) {
    $size = $sizes[$i]
    $blob = $pngBlobs[$i]
    $wByte = if ($size -ge 256) { 0 } else { $size }
    $hByte = if ($size -ge 256) { 0 } else { $size }
    $bw.Write([byte]$wByte)
    $bw.Write([byte]$hByte)
    $bw.Write([byte]0)      # color count
    $bw.Write([byte]0)      # reserved
    $bw.Write([UInt16]1)    # color planes
    $bw.Write([UInt16]32)   # bits per pixel
    $bw.Write([UInt32]$blob.Length)
    $bw.Write([UInt32]$offset)
    $offset += $blob.Length
}

foreach ($blob in $pngBlobs) {
    $bw.Write($blob)
}

$bw.Flush()
$bw.Close()
$fs.Close()

Write-Output "Wrote $outPath ($((Get-Item $outPath).Length) bytes)"
