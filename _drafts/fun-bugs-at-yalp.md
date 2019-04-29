When I worked at company Yalp, we had a few fun bugs.

## That time Maltz turned the Android apps into a botnet, which DDOS'd the site.

## Android Build Killed by Anti-Virus
- Android core team spends a couple quarters with this goal of speeding up build time for android app
- turns out, anti-virus on-demand scanner, which was installed on everyone's computers, was competing for read cycles with the build system as files were created.
- android team rolled out app modularization (so things could build independently), among other things, only to get a 90% gain
- strong case for doing profiling.

## That time the users team cached missing rows (user provenance)
