export interface IStatusFeedSubscriber {
    statusChanged(change: IStatusChange);
}

export interface IStatusChange
{
    type: StatusChangeType;
    newValue: boolean;
}

export enum StatusChangeType
{
    Docked,
    Landed,
    LandingGearDown,
    ShieldsUp,
    Supercruise,
    FlightAssistOff,
    HardpointsDeployed,
    InWing,
    LightsOn,
    CargoScoopDeployed,
    SilentRunning,
    ScoopingFuel,
    SrvHandbrake,
    SrvTurret,
    SrvUnderShip,
    SrvDriveAssist,
    FsdMassLocked,
    FsdCharging,
    FsdCooldown,
    LowFuel,
    OverHeating,
    HasLatLong,
    IsInDanger,
    BeingInterdicted
}