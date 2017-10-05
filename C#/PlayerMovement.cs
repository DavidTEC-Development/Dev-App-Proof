using UnityEngine;
using System.Collections;

public class PlayerMovement : MonoBehaviour
{
    Rigidbody r;
    public float moveSpeed = 10;
    private Vector3 input;
    private float maxSpeed = 10f;
    public GameObject deathParticles;

    public Vector3 PlayerSpawnPoint;

    void Start() {
        r = GetComponent<Rigidbody>();
        PlayerSpawnPoint = transform.position;
    }

    void Update() {
        input = new Vector3(Input.GetAxisRaw("Horizontal"), 0, Input.GetAxisRaw("Vertical"));

        if (r.velocity.magnitude < maxSpeed) { r.AddForce(input * moveSpeed); }

        if (Input.GetKey(KeyCode.A)) { r.AddForce(input * moveSpeed); };
        if (Input.GetKey(KeyCode.D)) { r.AddForce(input * moveSpeed); };
        if (Input.GetKey(KeyCode.W)) { r.AddForce(input * moveSpeed); };
        if (Input.GetKey(KeyCode.S)) { r.AddForce(input * moveSpeed); };
        if (Input.GetKey(KeyCode.Escape)) { Application.Quit(); };
        if (transform.position.y == -2) { Die(); }
    }

    void OnCollisionEnter(Collision other) {
        if (other.gameObject.name == "Enemy") { Die(); }
    }

    void OnTriggerEnter(Collider other) {
        if (other.gameObject.name == "Goal") { GameManager.CompleteLevel(); }
    }
    public void Die() {
        Instantiate(deathParticles, transform.position, Quaternion.identity);
        transform.position = PlayerSpawnPoint;
    }
}