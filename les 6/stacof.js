function recursiveFunction() {
    recursiveFunction(); // Не має умови завершення
}

recursiveFunction(); // Викличе stack overflow
