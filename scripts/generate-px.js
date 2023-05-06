const items = {
  mx: ["margin-left", "margin-right"],
  my: ["margin-top", "margin-bottom"],
};

Object.entries(items).forEach((item) => {
  console.log(
    `"${item[0]}-": "${item[1][0]}: {value}px; ${item[1][1]}: {value}px",`
  );
  console.log(`"${item[0]}-px": "${item[1][0]}: 1px; ${item[1][1]}: 1px",`);

  for (i = 0; i <= 4; i += 0.5) {
    console.log(
      `"${item[0]}-${i}": "${item[1][0]}: ${i * 2}px;  ${item[1][1]}: ${
        i * 2
      }px",`
    );
  }

  for (i = 5; i <= 16; i++) {
    if ([13, 15].includes(i)) continue;
    console.log(
      `"${item[0]}-${i}": "${item[1][0]}: ${i * 4}px; ${item[1][1]}: ${
        i * 4
      }px",`
    );
  }

  for (i = 20; i <= 64; i += 4) {
    console.log(
      `"${item[0]}-${i}": "${item[1][0]}: ${80 + 16 * ((i - 20) / 4)}px; ${
        item[1][1]
      }: ${80 + 16 * ((i - 20) / 4)}px",`
    );
  }

  console.log(`"${item[0]}-72": "${item[1][0]}: 288px; ${item[1][1]}: 288px",`);
  console.log(`"${item[0]}-80": "${item[1][0]}: 320px; ${item[1][1]}: 320px",`);
  console.log(`"${item[0]}-96": "padding-tio: 384px; ${item[1][1]}: 384px",`);
});
