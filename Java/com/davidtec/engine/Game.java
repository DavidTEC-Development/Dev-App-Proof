package com.davidtec.engine;

import org.lwjgl.input.Keyboard;

public class Game {
	private static Mesh mesh;
	public Game() {
		mesh = new Mesh();
		
		Vertex[] data = new Vertex[] {new Vertex(new Vector3f(-1, -1, 0)),
									  new Vertex(new Vector3f(-1, 1, 0)),
									  new Vertex(new Vector3f(0, 1, 0)),};
		mesh.addVertices(data);
	}

	public static void input() {
		if (Input.getKeyDown(Keyboard.KEY_UP)) {
			System.out.println("We've just pressed up!");
		}
		if (Input.getKeyUp(Keyboard.KEY_UP)) {
			System.out.println("We've just released up!");
		}
		if (Input.getMouseDown(MouseButtons.RightClick)) {
			System.out.println("We've just Right Clicked at: " + Input.getMousePosition());
		}
		if (Input.getMouseUp(MouseButtons.RightClick)) {
			System.out.println("We've just released The Right Click Mouse Button at: " + Input.getMousePosition());
		}
		if (Input.getMouseDown(MouseButtons.LeftClick)) {
			System.out.println("We've just Left Clicked at: " + Input.getMousePosition());
		}
		if (Input.getMouseUp(MouseButtons.LeftClick)) {
			System.out.println("We've just released The Left Click Mouse Button at: " + Input.getMousePosition());
		}
	}

	public static void Update() {

	}

	public static void Render() {
		//mesh.draw();
	}
}
