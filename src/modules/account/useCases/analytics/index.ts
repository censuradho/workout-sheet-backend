import { AnalyticsController } from './analytics.controller'
import { AnalyticsService } from './analytics.service'

const analyticsService = new AnalyticsService()
export const analyticsController = new AnalyticsController(analyticsService)