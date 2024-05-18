import React from "react";

const PostCard = () => {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1566204978576-77f6addcef4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full aspect-[16/10] object-cover rounded-md"
      />
      <div className="pt-3">
        <h4 className="font-semibold text-lg line-clamp-2 mb-1">Lãnh đạo Đảng, Nhà nước vào lăng viếng Chủ tịch Hồ Chí Minh</h4>
        <p className="line-clamp-3 text-gray-500">
          Sáng 18/5, lãnh đạo Đảng, Nhà nước đặt vòng hoa, vào lăng viếng Chủ
          tịch Hồ Chí Minh nhân kỷ niệm 134 năm ngày sinh (19/5/1890).\n\n\n
        </p>
      </div>
    </div>
  );
};

export default PostCard;
