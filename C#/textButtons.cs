using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class textButtons : MonoBehaviour {
    public bool isPlay;
    public bool isQuit;
	void Start () {
		
	}
	
	void Update () {
        
    }

    void OnMouseUp() {
        if (isPlay) {
            print("a");
        }

        if (isQuit) {
            Application.Quit();
        }
    }
}
