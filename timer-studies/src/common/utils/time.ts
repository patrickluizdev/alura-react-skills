export function timeForSeconds(time: string) {
  const [h = "0", m = "0", s = "0"] = time.split(":");

  const hoursForSeconds = Number(h) * 3600;
  const minutesForSeconds = Number(m) * 60;

  return hoursForSeconds + minutesForSeconds + Number(s);
}
