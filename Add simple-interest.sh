#!/bin/bash
# Simple Interest Calculator
# Formula: (P × R × T) / 100

echo "Enter the Principal:"
read p
echo "Enter the Rate of Interest:"
read r
echo "Enter the Time period:"
read t

si=$((p * r * t / 100))
echo "The Simple Interest is: $si"
