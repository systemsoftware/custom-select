# custom-select
Allow users to add a custom option to a select dropdown
```html
<head>
<script src="./custom-select.js"></script> <!-- Include the script -->
</head>

<select custom title="e" custom-label="Enter Custom" custom-optgroup="Custom Values">
    <option value="1">1</option>
</select>
```

That's it! The script will automatically add a custom option to the select dropdown. The custom option will be added to the end of the dropdown and will be displayed as "Enter Custom". When the user selects the custom option, a prompt will appear asking the user to enter a custom value. The custom value will be added to the dropdown and selected automatically.