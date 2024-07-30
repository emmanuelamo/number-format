# Phone Number Processor

This project processes phone numbers from a CSV or XLSX file, formats them, and saves the results to a new CSV file. The script removes spaces and dashes, adds a leading zero if the number is 9 digits long, and adds the country code `233`.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Setup

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd phone_number_processor
    ```

2. **Install dependencies**:
    ```sh
    npm install
    npm install xlsx

    ```

3. **Add your input file**:
    - Place your CSV or XLSX file in the project directory.

## Usage

1. **Update the filename**:
    - In `main.js`, change the `filename` variable to match the name of your input file:
      ```javascript
      const filename = "Customer Details 17.04.2024.xlsx - Sheet1.csv"; // Change this to your file's name
      ```

2. **Run the script**:
    ```sh
    node main.js
    ```

3. **Check the output file**:
    - The processed phone numbers will be saved in `CustomerSheet1.csv` in the project directory.

## File Structure

- `main.js`: The main script that processes the phone numbers.
- `index.js`: Helper functions for reading files and creating the output file.
- `Customer Details 17.04.2024.xlsx - Sheet1.csv`: Example input file (replace this with your actual file).
- `CustomerSheet1.csv`: The output file containing processed phone numbers.

## Example

### Input CSV/XLSX

