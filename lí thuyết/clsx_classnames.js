/**
 * clsx ra đời trước so với classnames, cả 2 đều có nhiệm vụ là giúp truyền tên các class vào phần tử , cú pháp ngắn gọn
 * clsx : là 1 function với tham số truyền vào là 1 mảng tên các class , bên cạnh đó giúp class động thì lúc đó sẽ nhận vào 1 object
 * syntax: { ['className'] : true/false}
 * true: sẽ được ghi class đó vào
 * false: không được ghi class đó vào.
 */
function Button() {
  return (
    <>
      <button className={style.btn}>Click me!</button>
      <button
        className={clsx(style.btn, {
          [style.active]: false,
        })}
      >
        Click me!
      </button>
    </>
  );
}
