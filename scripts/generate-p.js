const items = {
  m: "margin",
  ml: "margin-left",
  mr: "margin-right",
  mt: "margin-top",
  mb: "margin-bottom",
};

Object.entries(items).forEach((item) => {
  console.log(`"${item[0]}-": "${item[1]}: {value}px",`);
  console.log(`"${item[0]}-px": "${item[1]}: 1px",`);

  for (i = 0; i <= 4; i += 0.5) {
    console.log(`"${item[0]}-${i}": "${item[1]}: ${i * 2}px",`);
  }

  for (i = 5; i <= 16; i++) {
    if ([13, 15].includes(i)) continue;
    console.log(`"${item[0]}-${i}": "${item[1]}: ${i * 4}px",`);
  }

  for (i = 20; i <= 64; i += 4) {
    console.log(
      `"${item[0]}-${i}": "${item[1]}: ${80 + 16 * ((i - 20) / 4)}px",`
    );
  }

  console.log(`"${item[0]}-72": "${item[1]}: 288px",`);
  console.log(`"${item[0]}-80": "${item[1]}: 320px",`);
  console.log(`"${item[0]}-96": "${item[1]}: 384px",`);
});
