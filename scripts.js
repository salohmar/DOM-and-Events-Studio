// Write your JavaScript code here.
// Remember to pay attention to page loading!


    window.addEventListener('load', function() {
        const takeoffButton = document.getElementById('takeoff');
        const landButton = document.getElementById('landing');
        const abortButton = document.getElementById('missionAbort');
        const flightStatusUpdate = document.getElementById('flightStatus');
        const shuttleBackground = document.getElementById('shuttleBackground');
        const shuttleHeight = document.getElementById('spaceShuttleHeight');
        const rocket = document.getElementById('rocket');

        takeoffButton.addEventListener('click', function() {
            let confirmTakeOff = confirm('Confirm that the shuttle is ready for takeoff.')
            if (confirmTakeOff) {
                flightStatusUpdate.innerHTML = 'Shuttle in flight.';
                shuttleBackground.style.backgroundColor = 'blue';
                shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
            }
        });

        landButton.addEventListener('click', function() {
            alert('The shuttle is landing. Landing gear engaged.');
            flightStatusUpdate.innerHTML = 'The shuttle has landed.';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
        });

        abortButton.addEventListener('click', function() {
            let confirmAbortMission = confirm('Confirm that you want to abort the mission.');
            if (confirmAbortMission) {
                flightStatusUpdate.innerHTML = 'Mission aborted.';
                shuttleBackground.style.backgroundColor = 'green';
                shuttleHeight.innerHTML = 0;
            }
        });

    //     let movementLeft = 0;
    //     let movementRight = 0;
    //     let movementUp = 0;
    //     let movementDown = 0;
    //     let shuttleHeightTotal = 0;
        
    //    const moveRocket = (direction) => {
    //         if (direction === 'up') {
    //             shuttleHeight += 10000
    //             shuttleHeight.innerHTML = shuttleHeightTotal
    //             movementUp -= 10
    //             rocket.style.marginTop = `${movementUp}px`
    //         }
    //         if (direction === 'down') {
    //             movementDown -= 10
    //             rocket.stlye.marginTop = `${movementDown}px`
    //             shuttleHeight -= 10000
    //             shuttleHeight.innerHTML = shuttleHeightTotal
    //         }
    //         if (direction === 'left') {
    //             movementLeft -= 10;
    //             rocket.stlye.marginLeft = `${movementLeft}px`
    //         }
    //         if(direction === 'right') {
    //             movementRight -= 10;
    //             rocket.stlye.marginRight = `${movementLeft}px`
    //         }
    //     }
        })
    





   
