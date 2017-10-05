using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SplashScreens : MonoBehaviour {
    public int nextLevel;
    public static bool Splash;
    public static int nextLevelStatic;

    void Start() {
        Splash = false;
    }

    void Update() {
        if (Splash) {
            Once();
        }
    }

    void OnPreRender() {
        Splash = true;
    }

    void Once() {
        nextLevelStatic = nextLevel;
        TimeWait(5);
    }

    public static void TimeWait(int timeSeconds) {
        timeSeconds *= 1000;
        System.Threading.Thread.Sleep(timeSeconds);

        SceneManager.LoadScene(nextLevelStatic);
    }
}
