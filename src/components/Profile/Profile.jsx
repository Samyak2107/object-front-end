import React from 'react'

function Profile({name, entries, email, joindate}) {
    if (entries < 101) {
        var badge = "Beginner";
    } else if(entries > 100 && entries < 201) {
        var badge = "Advanced";
    } else if(entries > 200 && entries < 301) {
        var badge = "Pro";
    } else if(entries > 300) {
        var badge = "Old timer";
    }
    return (
        <div>
            <h1><b>Name: </b>${name}</h1>
            <h1><b>Email: </b>${email}</h1>
            <h1><b>Join date: </b>${joindate}</h1>
            <h1><b>Images detected: </b>${entries}</h1>
            <h1><b>Badge: </b>{badge}</h1>
        </div>
    )
}

export default Profile;
