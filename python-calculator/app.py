def read_number(prompt: str) -> float:
    while True:
        raw = input(prompt).strip()
        try:
            return float(raw)
        except ValueError:
            print("Please enter a valid number (e.g. 12 or 3.14).")


def main() -> None:
    print("Simple Arithmetic Helper\n==========================")
    first = read_number("Enter the first number: ")
    second = read_number("Enter the second number: ")

    addition = first + second
    multiplication = first * second

    print(f"\nResults for {first} and {second}:")
    print(f"Addition: {addition}")
    print(f"Multiplication: {multiplication}")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nGoodbye!")
