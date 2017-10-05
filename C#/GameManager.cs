using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour {
    public bool useHardcodeString;
    public int maxLevels;

    public static int endLevel;
    public static int maxLevelsHardcode = 7;
    public static int maxLevelsInteger;
    public static int currentScore;
    public static int highScore;

    public static int currentLevel = 1;
    public static int unlockedLevel;

    private void Start() {
        if(useHardcodeString) {
            maxLevelsInteger = maxLevelsHardcode - 1;
            endLevel = maxLevelsHardcode + 1;
        } else {
            maxLevelsInteger = maxLevels - 1;
            endLevel = maxLevels + 1;
        }

        currentLevel += 1;
    }
    public static void CompleteLevel() {
        if (currentLevel < maxLevelsInteger) {
            currentLevel += 1;
            SceneManager.LoadScene(currentLevel);
        } else {
            SceneManager.LoadScene(endLevel);
        }
    }
}
