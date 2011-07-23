#!/bin/bash

COMPILER_CMD="java -jar closure/compiler.jar"
OUTPUT_FLAG="--js_output_file unstdlib.js"
#EXTRA_FLAGS="--compilation_level ADVANCED_OPTIMIZATIONS"

if [ ! -d closure ]; then
    echo "Closure compiler not found, downloading..."
    mkdir closure
    wget http://closure-compiler.googlecode.com/files/compiler-latest.tar.gz -O- | tar -xzvf -
fi

targets=""
for t in src/*.js; do
    targets="$targets --js $t"
done

echo -n "Compiling... "
$COMPILER_CMD $OUTPUT_FLAG $EXTRA_FLAGS $targets
echo "Done."

echo "Warning: monkeypatch files are not included by default."
