export function isOk(res: Response) {
  if (res.ok)
    return res;
  else
    throw new Error(res.statusText);
}
