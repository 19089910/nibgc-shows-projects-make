@echo off
setlocal enabledelayedexpansion

REM === CONFIGURAÇÕES INICIAIS ===
set "marca1=Marca_VP_2025_3D_1_ktk22v.png"
set "marca2=NIB_Grande_Circular_1_rotkd8.png"

echo Verificando tamanho das marcas d'água...

REM === VERIFICAR E REDIMENSIONAR MARCAS ===
for %%I in ("%marca1%" "%marca2%") do (
    for /f "tokens=1,2 delims=x" %%a in ('magick identify -format "%%w x %%h" %%~I') do (
        if NOT "%%a"=="405" if NOT "%%b"=="252" (
            echo Redimensionando %%~I...
            magick %%~I -resize 405x252! %%~I
        )
    )
)

REM === REDIMENSIONAR E COMPRIMIR IMAGENS ===
echo Redimensionando e comprimindo imagens originais...
for %%F in (*.JPG) do (
    magick "%%F" -resize 1920x1080 -quality 70 "%%F"
)

REM === ADICIONAR MARCAS D'ÁGUA ===
echo Adicionando marcas d'água nas imagens...
for %%I in (*.JPG) do (
    echo Processando %%I...
    magick "%%I" "%marca1%" -gravity South -geometry +-510+10 -composite "%marca2%" -gravity South -geometry +580+10 -composite "result_%%~nI.jpg"
)

echo ------------------------------------
echo Upload finalizado!
echo Links salvos em links.txt
pause
