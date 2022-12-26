use image::DynamicImage;

// test function to get image dimensions
#[test]
fn test_get_image_dimensions() {
  let image = image::open("test.png").unwrap();
  let dimensions = get_image_dimensions(image);
  assert_eq!(dimensions, (800, 600));
}

/// Returns the dimensions
fn get_image_dimensions(image: DynamicImage) -> (u32, u32) {
  let (width, height) = image.dimensions();
  (width, height)
}
