/**
 * Types for Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */


// Ada tanda ? artinya: rain bisa ada ato ga, jadi qt taruh tanda ?

interface WeatherCondition {
    description: string
    icon: string
    main: string
    id: number
}

export interface WeatherReport {
    weather: WeatherCondition[]
    main: {
        temp: number
        feels_like: number
        humidity: number
    }
    wind: {
        speed: number
        deg: number
        gust: number
    }
    rain?: {
        "1h"?: number
        "3h"?: number
    }
    dt: number
    sys: {
        country: string
        sunrise: number
        sunset: number
    }
    name: string
}