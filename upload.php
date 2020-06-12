<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["images"]["name"][0]);

move_uploaded_file($_FILES["images"]["tmp_name"][0], $target_file);

// ĐỦ MÁ, NHỚ CHO KỸ
// Ở ĐÂY PHẢI TRẢ VỀ JSON Y CHANG, ĐỦ MÁ, NHỚ LÀ Y CHANG =]]]]
$arr = [
    "image_src" => $target_file,
];
echo json_encode($arr);
die();
?>