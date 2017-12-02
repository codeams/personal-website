
import ProjectPreview from '@/models/ProjectPreview'

export default class Project {
  constructor (attributes) {
    this.id = attributes.id || 0
    this.name = attributes.name || 'Unknown'
    this.role = attributes.role || 'Unknown'
    this.previewUrl = attributes.previewUrl || ''
  }

  get preview () {
    return new ProjectPreview(this)
  }
}
