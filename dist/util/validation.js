export function validate(ValidatableInput) {
    let isValid = true;
    if (ValidatableInput.required) {
        isValid = isValid && ValidatableInput.value.toString().trim().length !== 0;
    }
    if (ValidatableInput.minLength != null &&
        typeof ValidatableInput.value === "string") {
        isValid =
            isValid && ValidatableInput.value.length > ValidatableInput.minLength;
    }
    if (ValidatableInput.maxLength != null &&
        typeof ValidatableInput.value === "string") {
        isValid =
            isValid && ValidatableInput.value.length < ValidatableInput.maxLength;
    }
    if (ValidatableInput.min != null &&
        typeof ValidatableInput.value === "number") {
        isValid = isValid && ValidatableInput.value >= ValidatableInput.min;
    }
    if (ValidatableInput.max != null &&
        typeof ValidatableInput.value === "number") {
        isValid = isValid && ValidatableInput.value <= ValidatableInput.max;
    }
    return isValid;
}
