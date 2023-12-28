## Checkbox Functionality

- When checkbox is checked, button should be disabled
  - fireEvent.click
  - once to disable, once to re-enable
- Assertions on button
  - expect(button).toBeEnabled()
  - expect(button).toBeDisabled()
