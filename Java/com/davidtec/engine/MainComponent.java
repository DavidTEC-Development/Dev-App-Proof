package com.davidtec.engine;

public class MainComponent {
	public static final int width = 800;
	public static final int height = 600;
	public static final String title = "3D Game Engine v2.0";
	public static final double FRAME_CAP = 5000.0;

	private boolean isRunning;
	private Game game = new Game();
	
	public MainComponent() {
		System.out.println("OpenGL Version: " + RenderUtil.getOpenGLVersion());
		RenderUtil.initGrpahics();
		isRunning = false;
	}

	public void Start() {
		if (isRunning) {
			return;
		}

		Run();
	}

	public void Stop() {
		if (!isRunning) {
			return;
		}
		isRunning = false;
	}

	private void Run() {
		isRunning = true;

		int frames = 0;
		long frameCounter = 0;

		final double frameTime = 1.0 / FRAME_CAP;

		long lastTime = Time.getTime();
		double unprocessedTime = 0;

		while (isRunning) {
			boolean render = false;

			long startTime = Time.getTime();
			long passedTime = startTime - lastTime;
			lastTime = startTime;

			unprocessedTime += passedTime / (double) Time.SECOND;
			frameCounter += passedTime;

			while (unprocessedTime > frameTime) {
				render = true;

				unprocessedTime -= frameTime;

				if (Window.isCloseRequested())
					Stop();
				Time.setDelta(frameTime);
				Input.Update();

				Game.input();
				Game.Update();

				if (frameCounter >= Time.SECOND) {
					System.out.println(frames);
					frames = 0;
					frameCounter = 0;
				}
			}
			if (render) {
				RenderUtil.clearScreen();
				Render();
				frames++;
			} else {
				try {
					Thread.sleep(1);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}

		cleanUp();
	}

	private void Render() {
		Game.Render();
		Window.Render();
	}

	private void cleanUp() {
		Window.Dispose();
	}

	public static void main(String[] args) {
		Window.createWindow(height, width, title);

		MainComponent gameComponents = new MainComponent();

		gameComponents.Start();
	}
}
