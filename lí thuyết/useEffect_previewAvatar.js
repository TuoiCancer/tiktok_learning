// mỗi lần người dùng chọn 1 file ảnh thì sẽ hiển thị ảnh đó ra để cho người dùng họ nhìn thấy , mỗi lần họ change file thì sẽ phải xóa vùng nhớ của file lần trc được tạo

const [avatar, setAvatar] = useState();

useEffect(() => {
  return () => {
    if (avatar) URL.revokeObjectURL(avatar.preview); //xóa file khỏi bộ nhớ
  };
}, [avatar]);

const handlePreviewAvatar = (e) => {
  const file = e.target.files[0];
  file.preview = URL.createObjectURL(file); // tạo đường dẫn từ file để render ra thẻ img
  setAvatar(file);
  e.target.value = "";
};

return (
  <div>
    <input type="file" onChange={handlePreviewAvatar} />
    {avatar && <img src={avatar.preview} alt="" width="80%" />}
  </div>
);
