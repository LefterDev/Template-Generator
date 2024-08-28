export const BasicTemplate = {
  directory: { src: { test: {}, basic: {}, images: {} } },
  files: {
    basic: { "basic.txt": "basic text file" },
    images: { "image.txt": "basic image file" },
    test: { "test.txt": "basic text file" },
  },
};

export const StandardTemplate = {
  directory: {
    src: {
      test: {},
      standard: {},
      images: {},
    },
  },
  files: {
    standard: { "standard.txt": "standard text file" },
    images: { "image.txt": "standard image file" },
    test: { "test.txt": "standard text file" },
  },
};

export const PremiumTemplate = {
  directory: {
    src: {
      test: {},
      premium: {},
      images: {},
    },
  },
  files: {
    premium: { "premium.txt": "premium text file" },
    images: { "image.txt": "premium image file" },
    test: { "test.txt": "premium text file" },
  },
};
