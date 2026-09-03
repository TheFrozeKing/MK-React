interface IEmpty {
  width?: string;
  height?: string;
}

export default function Empty({ width, height }: IEmpty) {
  return <div style={{ width: width, height: height }}></div>;
}
