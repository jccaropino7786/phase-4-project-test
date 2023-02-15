class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :summary, :status
  has_one :user
end
