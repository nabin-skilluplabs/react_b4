function Avatar({ width = 50, height = 50, profile }) {
  return (
    <img
      src={profile}
      className="rounded-[50px]"
      width={width}
      height={height}
    />
  );
}

export default Avatar;
