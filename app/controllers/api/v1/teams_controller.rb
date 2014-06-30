class Api::V1::LeadsController < ApplicationController
  respond_to :json 

  def index
    respond_with Team.all 
  end

  def show
    respond_with team
  end

  def create
    respond_with :api, :v1, Team.create(team_params)
  end

  def update
    respond_with team.update(team_params)
  end

  def destroy
    respond_with team.destroy
  end

  private
  
  def team 
    Team.find(params[:id])
  end

  def team_params
    params.require(:team).permit(:country, :continent)
  end
end
