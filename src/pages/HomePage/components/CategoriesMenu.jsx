import React from 'react';

//Anasayfa kategoriler sekmesi
//Burada veritabanindan alinan kategori objesi menuye donusturulur.

//Ana kategoriler ve alt kategoriler obje ve array metodlari ile dolasilir.

//Kategori listesinde tiklanan link,
//verilen id ile ust kategori ise tum urunleri,
//alt kategori ise sadece kendi urunlerini getirecek fonksiyonlari cagirir.
//Tiklanan kategori ismi anasayfa uzerinde gosterilir.
//Butonlarin onClick fonksiyonlarinda bulunurlar.

export default function CategoriesMenu({
  categories,
  getAllTopCategoryItems,
  getAllSubCategoryItems,
  setCategoryTitle,
}) {
  return (
    <div className="w-full lg:w-1/4 border-2 border-gray-200 px-4 py-5 bg-white rounded-lg">
      <h2 className="text-sm md:text-lg font-semibold text-gray-700 text-center lg:text-left my-5 hidden lg:inline-block">
        Kategoriler
      </h2>
      <div className="flex gap-y-5 justify-between lg:flex-col">
        {/* UST KATEGORI */}
        {categories.map((category) => (
          <div key={category.name}>
            <button
              className="hover:text-red-700 py-2 font-bold text-sm md:text-xl text-center lg:text-left lg:ml-5 mx-auto w-full"
              onClick={() => {
                getAllTopCategoryItems(category.id);
                setCategoryTitle(category.name);
              }}
            >
              {category.name}
            </button>
            {/* UST KATEGORI */}
            <hr />

            <div className="flex flex-col">
              {/* ALT KATEGORI LISTESI */}
              {category.subCategories &&
                category.subCategories.map((subCategory) => (
                  <button
                    key={subCategory.name}
                    className="hover:text-yellow-900 inline lg:text-left font-semibold text-xs md:text-base text-gray-600 gap-y-2 my-1 lg:ml-10"
                    onClick={() => {
                      getAllSubCategoryItems(subCategory.id);
                      setCategoryTitle(
                        `${category.name} --> ${subCategory.name}`
                      );
                    }}
                  >
                    {subCategory.name}
                  </button>
                ))}
              {/* ALT KATEGORI LISTESI */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
