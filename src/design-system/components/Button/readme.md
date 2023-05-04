# Buttons

Buttons are ready for use but are not fully implemented. The interface should be generally stable but the implementation may change.

## Outstanding Issues

### Accessibility

Buttons should be fully accessible but we do not have button components from either HeadlessUI for RadixUI. We are using a standard button without any opinions about accessibility.

We could use `react-aria` but they change the interface of the button and we would need to make sure that we are not breaking any existing implementations.

For now, hold off on making any decisions about button a11y until we see if anything develops in the headless space. If there's no movement from HeadlessUI or RadixUI, we can look into using `react-aria`.
