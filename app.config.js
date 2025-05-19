module.exports = {
  name: "Pixelito",
  slug: "pixelito",
  version: "1.0.10",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#80a180"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.jardino.pixelito",
    infoPlist: {
      NSPhotoLibraryUsageDescription: "Permitir a Pixelito guardar avatares en tu galería de fotos",
      NSPhotoLibraryAddUsageDescription: "Permitir a Pixelito guardar avatares en tu galería de fotos"
      // Eliminado: NSUserTrackingUsageDescription y SKAdNetworkItems
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#80a180"
    },
    package: "com.jardino.pixelito",
    "versionCode": 50,
    permissions: [
      "android.permission.READ_EXTERNAL_STORAGE",
      "android.permission.WRITE_EXTERNAL_STORAGE",
      "android.permission.ACCESS_MEDIA_LOCATION",
      "android.permission.INTERNET"
    ]
    // Eliminado: toda configuración de Google Mobile Ads
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      projectId: "c32ce86a-95dc-419e-9ca9-d84005fa7424"
    }
  },
  plugins: [
    "expo-router",
    [
      "expo-media-library",
      {
        photosPermission: "Permitir a Pixelito acceder a tus fotos.",
        savePhotosPermission: "Permitir a Pixelito guardar fotos.",
        isAccessMediaLocationEnabled: true
      }
    ]
    // Eliminado: plugin de react-native-google-mobile-ads
  ],
  owner: "jardino",
  runtimeVersion: {
    policy: "sdkVersion"
  },
  updates: {
    url: "https://u.expo.dev/c32ce86a-95dc-419e-9ca9-d84005fa7424"
  }
};