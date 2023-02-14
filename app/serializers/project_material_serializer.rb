class ProjectMaterialSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :material
  has_one :project
end
