using UnityEngine;
using Vuforia;

public class RobotStoryBehavior : MonoBehaviour, ITrackableEventHandler
{
    private TrackableBehaviour trackableBehaviour;

    void Start()
    {
        trackableBehaviour = GetComponent<TrackableBehaviour>();
        if (trackableBehaviour)
        {
            trackableBehaviour.RegisterTrackableEventHandler(this);
        }
    }

    public void OnTrackableStateChanged(
        TrackableBehaviour.Status previousStatus,
        TrackableBehaviour.Status newStatus)
    {
        if (newStatus == TrackableBehaviour.Status.DETECTED ||
            newStatus == TrackableBehaviour.Status.TRACKED ||
            newStatus == TrackableBehaviour.Status.EXTENDED_TRACKED)
        {
            OnMarkerFound();
        }
        else
        {
            OnMarkerLost();
        }
    }

    void OnMarkerFound()
    {
        Debug.Log("Marker found! Starting robot story...");
        gameObject.transform.GetChild(0).gameObject.SetActive(true);
    }

    void OnMarkerLost()
    {
        Debug.Log("Marker lost! Hiding robot story.");
        gameObject.transform.GetChild(0).gameObject.SetActive(false);
    }
}
