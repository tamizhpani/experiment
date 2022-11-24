#!/bin/bash

if [ $1 -le 7812 ] && [ $1 -ge 100 ]
then
echo "$1" >> /sys/class/backlight/intel_backlight/brightness
fi
