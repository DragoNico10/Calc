@ECHO OFF
:BEGIN
CHOICE /N /C:YN /M "Install with yarn(Y) or npm(N)?"
IF ERRORLEVEL ==2 GOTO TWO
IF ERRORLEVEL ==1 GOTO ONE
GOTO BEGIN
:TWO
ECHO Installing with npm
npm install
GOTO END
:ONE
ECHO Installing with yarn
yarn install
GOTO END
:END