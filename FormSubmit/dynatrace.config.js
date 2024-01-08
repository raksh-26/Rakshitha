module.exports = {
    react : {
        debug : true,

        lifecycle : {
            /**
             * Decide if you want to see Update Cycles as well
             */
            includeUpdate: false,

            /**
             * Filter for Instrumenting Lifecycle of Components / True = Will be instrumented
             */
            instrument: (filename) => {
                return false;
            }
        },

        input : {
            /**
             * Allows you to filter the instrumentation for touch events, refresh events and picker events in certain files
             * True = Will be instrumented
             */
            instrument: (filename) => {
                return true;
            }
        }
    },
    android : {
        // Those configs are copied 1:1
        config : `
        dynatrace {
            configurations {
                defaultConfig {
                    autoStart {
                        applicationId 'bb5e1f24-4e15-45ff-99da-1a06fc3f10c8'
                        beaconUrl 'https://dtsaas-sgw.uhc.com:443/mbeacon/05139191-c92a-4f81-a985-0d0addc2340b'
                    }
                    userOptIn true
                    agentBehavior.startupLoadBalancing true
                }
            }
        }
        `
    },
    ios : {
        // Those configs are copied 1:1
        config : `
        <key>DTXApplicationID</key>
        <string>bb5e1f24-4e15-45ff-99da-1a06fc3f10c8</string>
        <key>DTXBeaconURL</key>
        <string>https://dtsaas-sgw.uhc.com:443/mbeacon/05139191-c92a-4f81-a985-0d0addc2340b</string>
        <key>DTXLogLevel</key>
        <string>ALL</string>
        <key>DTXUserOptIn</key>
        <true/>
        <key>DTXStartupLoadBalancing</key>
        <true/>
        `
    }
}
