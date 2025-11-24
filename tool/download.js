const base = "http://ww31.tiki.ne.jp/~vz5yjpqo/sabae/e/";

const html = await Deno.readTextFile("../index.html");
const ss = html.split("\n");
for (const s of ss) {
  // <img src="img/a01-kanta.gif" id="puyo_1">
  const n = s.indexOf("<img src=");
  if (n < 0) continue;
  const fn = s.substring(n + 10, s.indexOf("\"", n + 10));
  console.log(fn);
  const bin = new Uint8Array(await (await fetch(base + fn)).arrayBuffer());
  console.log(bin);
  await Deno.writeFile("../" + fn, bin);
}
