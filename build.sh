#!/bin/bash

COMPILER_CMD="java -jar closure/compiler.jar"
OUTPUT_FLAG="--js_output_file unstdlib.js"
#EXTRA_FLAGS="--compilation_level ADVANCED_OPTIMIZATIONS"

if [ ! -f "closure/compiler.jar" ]; then
    echo "Closure compiler not found, downloading..."
    mkdir closure
    wget http://closure-compiler.googlecode.com/files/compiler-latest.tar.gz -O- | tar -xzv -f- -C closure
fi

targets=""
while read line; do
    targets="$targets --js $line";
done < MANIFEST

echo -n "Compiling... "
$COMPILER_CMD $OUTPUT_FLAG $EXTRA_FLAGS $targets || exit -1
echo "Done."

echo "Warning: monkeypatch files are not included by default."
