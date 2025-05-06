class user {
    private _grid: grid;
    private _usedCoords: number[][];
    private _buildingsBuilt: number = 0;

    private _userMoney: number = 5000000000;
    private _currentTime: number = 0;

    private _totalPopulation: number = 0;
    private _totalPollution: number = 0;

    private _hasPlanetaryDef: boolean = false;
    private _isGameOver: boolean = false

    public get grid(): grid { return this._grid; }
    public get usedCoords(): number[][] { return this._usedCoords}
    public get buildingsBuilt(): number { return this._buildingsBuilt;}

    public get userMoney(): number { return this._userMoney}    
}
