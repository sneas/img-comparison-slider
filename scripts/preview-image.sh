#!/bin/bash

ORIGINAL_FILE=$1
NEW_FILE=$2
BEFORE_QUALITY=$3
AFTER_QUALITY=$4

EFFECT="-blur 0x6"

convert $ORIGINAL_FILE -resize 1280x550^ -gravity Center -crop 1280x550+0+0 +repage -quality $BEFORE_QUALITY ${NEW_FILE}.webp
convert $ORIGINAL_FILE -resize 1280x550^ -gravity Center -crop 1280x550+0+0 +repage $EFFECT -quality $AFTER_QUALITY ${NEW_FILE}-blurred.webp
