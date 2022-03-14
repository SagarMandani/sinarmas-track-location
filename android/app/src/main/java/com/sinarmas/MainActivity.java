package com.sinarmas;
import android.os.Bundle;
// import com.facebook.react.ReactActivityDelegate; // <- add this necessary import
// import com.zoontek.rnbootsplash.RNBootSplash; // <- add this necessary import\
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Sinarmas";
  }

//  @Override
//  protected ReactActivityDelegate createReactActivityDelegate() {
//    return new ReactActivityDelegate(this, getMainComponentName()) {
//
//      @Override
//      protected void loadApp(String appKey) {
//        RNBootSplash.init(MainActivity.this); // <- initialize the splash screen
//        super.loadApp(appKey);
//      }
//    };
//  }
}
