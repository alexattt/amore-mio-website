export const CustomArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        height: "200px", width: "40px", display: "flex", justifyContent: "center", 
        alignItems: "center", backgroundColor: "black", opacity: 0.25
      }}
      onClick={onClick}
    />
  );
}