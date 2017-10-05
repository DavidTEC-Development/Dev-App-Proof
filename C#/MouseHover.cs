using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MouseHover : MonoBehaviour {
    Color Red = new Color(1, 0, 0, 1);
    Color White = new Color(1, 1, 1, 1);

    void Start () {
        GetComponent<Renderer>().material.color = White; 
    }

    void OnMouseEnter()
    {
        GetComponent<Renderer>().material.color = Red;
    }

    void OnMouseExit()
    {
        GetComponent<Renderer>().material.color = White;
    }
}
